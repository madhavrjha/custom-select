import { useState } from 'react'
import CustomSelect from './select/SelectWrapper'

export type User = {
	id: number
	name: string
	email: string
	avatar: string
}

const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john.doe@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		id: 3,
		name: 'Bob Johnson',
		email: 'bob.johnson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
	},
	{
		id: 4,
		name: 'Alice Williams',
		email: 'alice.williams@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		id: 5,
		name: 'David Brown',
		email: 'david.brown@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
	},
	{
		id: 6,
		name: 'Emily Davis',
		email: 'emily.davis@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
	{
		id: 7,
		name: 'Michael Miller',
		email: 'michael.miller@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
	},
	{
		id: 8,
		name: 'Sophia Wilson',
		email: 'sophia.wilson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
	},
	{
		id: 9,
		name: 'Matthew Moore',
		email: 'matthew.moore@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
	},
	{
		id: 10,
		name: 'Olivia Taylor',
		email: 'olivia.taylor@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
	},
	{
		id: 11,
		name: 'Daniel Anderson',
		email: 'daniel.anderson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
	},
	{
		id: 12,
		name: 'Grace Martinez',
		email: 'grace.martinez@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
	},
	{
		id: 13,
		name: 'Ethan Jones',
		email: 'ethan.jones@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
	},
	{
		id: 14,
		name: 'Ava Garcia',
		email: 'ava.garcia@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
	},
	{
		id: 15,
		name: 'Liam Hernandez',
		email: 'liam.hernandez@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
	},
	{
		id: 16,
		name: 'Chloe Smith',
		email: 'chloe.smith@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
	},
	{
		id: 17,
		name: 'Benjamin White',
		email: 'benjamin.white@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
	},
	{
		id: 18,
		name: 'Mia Johnson',
		email: 'mia.johnson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
	},
	{
		id: 19,
		name: 'Jackson Taylor',
		email: 'jackson.taylor@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
	},
	{
		id: 20,
		name: 'Abigail Davis',
		email: 'abigail.davis@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
	},
	{
		id: 21,
		name: 'William Brown',
		email: 'william.brown@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
	},
	{
		id: 22,
		name: 'Ella Thomas',
		email: 'ella.thomas@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
	},
	{
		id: 23,
		name: 'Alexander Miller',
		email: 'alexander.miller@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
	},
	{
		id: 24,
		name: 'Avery Wilson',
		email: 'avery.wilson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
	},
	{
		id: 25,
		name: 'Scarlett Moore',
		email: 'scarlett.moore@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
	},
	{
		id: 26,
		name: 'James Johnson',
		email: 'james.johnson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
	},
	{
		id: 27,
		name: 'Lily Anderson',
		email: 'lily.anderson@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
	},
	{
		id: 28,
		name: 'Henry Taylor',
		email: 'henry.taylor@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
	},
	{
		id: 29,
		name: 'Sofia Garcia',
		email: 'sofia.garcia@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
	},
	{
		id: 30,
		name: 'Logan Martinez',
		email: 'logan.martinez@example.com',
		avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
	},
]

const App = () => {
	const [selectedUsers, setSelectedUsers] = useState<User[] | null>(null)

	return (
		<main className='main'>
			<h1>Pick Users</h1>
			<div className='select-wrapper'>
				<CustomSelect options={users} values={selectedUsers} onChange={value => setSelectedUsers(value)} />
			</div>
		</main>
	)
}

export default App
