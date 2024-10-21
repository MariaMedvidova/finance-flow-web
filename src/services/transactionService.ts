// In the MVP, this could be a placeholder for backend communication.
// For now, it can just simulate a delay.
export const addTransaction = async (transaction: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transaction);
      }, 500);
    });
  };
  
  export const getTransactions = async () => {
    return [];
  };
  