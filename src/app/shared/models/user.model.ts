export interface User {
  id?: number;
  name: string;
  employeeId: string;
  userId: any;
  emailAddress: string;
  company: {
    id: number;
    name: string;
  };
}
