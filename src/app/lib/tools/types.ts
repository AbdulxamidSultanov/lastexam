export interface User {
  age: number;
  email: string;
  first_name: string;
  id?: number;
  last_name: string;
  phone: string;
  position: string;
  username: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  description: string;
  location: string;
  created_at: string;
  work_type: string;
  ish_vaqti: string;
  salary: string;
  user: number;
}

export interface UserResponse {
  id?: number;
  name: string;
  email: string;
}

export interface jobsType {}

export interface fakeJobs {
  id: number;
  category: string;
  info: string;
  image: any;
  width: number;
  height: number;
}
