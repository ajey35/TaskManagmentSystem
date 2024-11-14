create table users(
  id serial primary key,
  username varchar(100) not null,
  email varchar(100) not null,
  password varchar(150) not null,
  p_tasks int	 default 0,
  c_tasks int default 0,
  e_tasks int default 0,
  total_tasks int default 0
)


create table tasks(
  id serial primary key,
  title varchar(150) not null,
  description TEXT,
  dd TIMESTAMP not null,
  status VARCHAR(20) CHECK (status IN ('Pending','Completed','Expired')) default 'Pending',
  priority VARCHAR(20) CHECK ( priority IN ('Low','Medium','High')) DEFAULT 'medium',
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

alter table tasks add column pp int default 0;


select * from users;

insert into users(username,email,password,p_tasks,c_tasks,e_tasks) values('Ajay','@jay@rchie@gmail.com',''			)

