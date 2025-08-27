let users = [
    { id: 1, nama: "radit" },
    { id: 2, nama: "dias" },
];

module.exports = {
    findAll: () => users,

    findOne: (id) => users.find(u => u.id === id),

    create: (user) => {
        users.push(user);
        return user;
    }
};
