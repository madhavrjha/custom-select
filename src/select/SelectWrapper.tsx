import { useCallback, useEffect, useRef, useState } from 'react'
import { User } from '../App'
import styles from './select.module.css'
import { IoClose } from 'react-icons/io5'

type CustomSelectProps = {
	options: User[]
	values: User[] | null
	onChange: (value: User[]) => void
}

type ChipFocusStatus = 'idle' | 'focused'

const CustomSelect = ({ options, values, onChange }: CustomSelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [highlightedIndex, setHighlightedIndex] = useState(0)
	const [searchText, setSearchText] = useState('')
	const [chipFocusStatus, setChipFocusStatus] = useState<ChipFocusStatus>('idle')
	const [unselectedOptions, setUnselectedOptions] = useState<User[]>(() => {
		return options.filter(o => {
			const selectedIds = values?.map(v => v.id)
			return !selectedIds?.includes(o.id)
		})
	})

	const containerRef = useRef<HTMLDivElement>(null)

	const listedOptions = unselectedOptions.filter(op => op.name.toLowerCase().includes(searchText.toLowerCase()))

	const addSelectedValue = useCallback(
		(newValue: User) => {
			// Add to Values
			if (!values) {
				onChange([newValue])
			} else {
				onChange([...values, newValue])
			}
			// Removes from Options
			setUnselectedOptions(op => op.filter(o => o.id !== newValue.id))
		},
		[onChange, values]
	)

	const removeSelectedValue = useCallback(
		(newValue: User) => {
			// Remove from values
			if (values) {
				onChange(values?.filter(v => v.id !== newValue.id))
			}
			// Add to Option
			setUnselectedOptions([...unselectedOptions, newValue])
		},
		[onChange, values, unselectedOptions]
	)

	useEffect(() => {
		setHighlightedIndex(0)
	}, [isOpen])

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			// if (e.target !== containerRef.current) return
			switch (e.code) {
				case 'Enter':
				case 'Space':
					setChipFocusStatus('idle')
					if (isOpen && listedOptions.length) {
						addSelectedValue(listedOptions[highlightedIndex])
					}
					break
				case 'ArrowUp':
				case 'ArrowDown':
					setChipFocusStatus('idle')
					if (!isOpen) {
						setIsOpen(true)
					} else {
						const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1)
						if (newValue < 0) {
							setHighlightedIndex(0)
						} else if (newValue >= 0 && newValue < listedOptions.length) {
							setHighlightedIndex(newValue)
						} else if (newValue >= listedOptions.length) {
							setHighlightedIndex(listedOptions.length - 1)
						}
					}
					break
				case 'Escape':
					setChipFocusStatus('idle')
					setIsOpen(false)
					break
				case 'Backspace':
					if (searchText === '' && values && values.length > 0) {
						if (!values) {
							setChipFocusStatus('idle')
						} else if (chipFocusStatus === 'idle') {
							setChipFocusStatus('focused')
						} else if (chipFocusStatus === 'focused') {
							setChipFocusStatus('idle')
							removeSelectedValue(values[values.length - 1])
						}
					}
					break
				default:
					setChipFocusStatus('idle')
			}
		}

		containerRef.current?.addEventListener('keydown', handler)

		const currentContainerRef = containerRef.current
		return () => {
			currentContainerRef?.removeEventListener('keydown', handler)
		}
	}, [
		isOpen,
		highlightedIndex,
		addSelectedValue,
		listedOptions,
		chipFocusStatus,
		values,
		onChange,
		removeSelectedValue,
		searchText,
	])

	return (
		<div
			className={styles.container}
			tabIndex={0}
			ref={containerRef}
			onFocus={() => setIsOpen(prev => !prev)}
			onBlur={() => setIsOpen(false)}>
			<div className={styles.selectBox}>
				<div className={styles.chipsWrapper}>
					{values?.map((value, index) => (
						<span
							key={value.id}
							className={`${styles.chip} ${
								index === values.length - 1 && chipFocusStatus === 'focused' ? styles.highlighted : ''
							}`}>
							<img src={value.avatar} alt={value.name} className={styles.chipAvatar} />
							{value.name}
							<span
								className={styles.closeBtn}
								onClick={e => {
									e.stopPropagation()
									removeSelectedValue(value)
								}}>
								<IoClose />
							</span>
						</span>
					))}
				</div>
				<input
					type='text'
					placeholder='Add new user...'
					className={styles.searchInput}
					onFocus={e => {
						e.stopPropagation()
						setIsOpen(true)
					}}
					value={searchText}
					onChange={e => {
						setSearchText(e.target.value)
					}}
				/>
			</div>
			<ul className={`${styles.listWrapper} ${isOpen ? styles.show : ''}`}>
				{listedOptions.map((option, index) => (
					<li
						key={option.id}
						className={`${styles.listItem} ${highlightedIndex === index ? styles.highlighted : ''}`}
						onClick={e => {
							e.stopPropagation()
							addSelectedValue(option)
						}}
						onMouseEnter={() => setHighlightedIndex(index)}>
						<img src={option.avatar} alt={option.name} />
						<h2>{option.name}</h2>
						<p>{option.email}</p>
					</li>
				))}
				{listedOptions.length === 0 ? <li style={{ textAlign: 'center', padding: '10px' }}>No Users to Select</li> : ''}
			</ul>
		</div>
	)
}

export default CustomSelect
