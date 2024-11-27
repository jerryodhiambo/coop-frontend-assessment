export interface CustomNotification {
  type: 'error' | 'warning' | 'success';
  message: {
    title?: string;
    description?: string;
  };
  buttons?: any[];
}
