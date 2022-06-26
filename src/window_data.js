
const Header = ['Value', 'Date', 'User', 'Comment'];
const Row_data = [
    {
        value: 11,
        date: '17.06.2022',
        user: 'Petro',
        comment: 'test raw data'
    },
    {
        value: 14,
        date: '17.06.2022',
        user: 'Ivano',
        comment: 'test raw data'
    },
    {
        value: 16,
        date: '17.06.2022',
        user: 'Mykola',
        comment: 'test raw data'
    },
    {
        value: 21,
        date: '17.06.2022',
        user: 'Oksana',
        comment: 'test raw data'
    },
];
const Users = ['Petro', 'Ivano', 'Mykola', 'Oksana'];
const defaulData = {
    value: '',
    date: new Date().toISOString().substring(0, 10),
    user: 'Petro',
    comment: ''

}    
// 



export { Header, Row_data, Users, defaulData };