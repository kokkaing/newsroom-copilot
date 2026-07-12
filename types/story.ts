export type Priority = "High" | "Medium" | "Low";

export type Story = {
  id: string;
  title: string;
  category: string;
  priority: Priority;
  location: string;
};