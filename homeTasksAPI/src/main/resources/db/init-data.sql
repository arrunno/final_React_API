INSERT INTO tasks(id, category, name, status, doer, value, time_of_registration)
VALUES
    ('48a95af7-8b83-4a08-8001-0f865db8ea26', 'Gyvunai', 'Šuns maitinimas', 1, 'Ona', 1, '2021-12-02 10:50:00'),
    ('15a95af7-8b83-4a08-8001-0f865db8ea27', 'Švara', 'Sutvarkyti savo kambarį', 1, 'Petras', 2, '2021-12-02 10:50:00');

INSERT INTO users(id, username, name, surname, password) VALUES
                         ('c2aa5f20-2441-40f8-8cce-d31dbd17bc84', 'ona', 'Ona', 'Dukra','{bcrypt}$2a$10$jYIbAef1H7S.womsk7MRtOCSEx/DgM7CZ1nNeLLzoZ/OPs0a25DV2'), /*pass->user*/
                         ('bd8968db-ad2a-4dd0-a0ab-7eebcc05427e', 'mama', 'Mama', 'Karaliene','{bcrypt}$2a$10$VylYhXDaKC7W28tQTvYYkOdZIj2pnPVIobXOConbXy3xeBcF6Xuni'); /*pass->user*/
INSERT INTO roles(id, name) VALUES
                                ('60dbb7bb-99a0-42eb-a837-8be6b697c074', 'USER'),
                                ('3906c549-44bf-494b-9537-5e1658a029a8', 'ADMIN');
INSERT INTO users_roles(user_id, roles_id) VALUES
                               ('c2aa5f20-2441-40f8-8cce-d31dbd17bc84', '60dbb7bb-99a0-42eb-a837-8be6b697c074'),
                               ('bd8968db-ad2a-4dd0-a0ab-7eebcc05427e', '60dbb7bb-99a0-42eb-a837-8be6b697c074'),
                               ('bd8968db-ad2a-4dd0-a0ab-7eebcc05427e', '3906c549-44bf-494b-9537-5e1658a029a8');
