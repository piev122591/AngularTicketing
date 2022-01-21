export interface SavingDiscovered {
  id?: number;
  number: string;
  costCenter: string;
  status: number;
  company: {
    id: number;
    name: string;
  };
  account: {
    id: number;
    name: string;
    accountType: string;
  };
  assignedTo: {
    id: number;
    name: string;
  };
  parentId: string;
  circuitNumber: number;
  savingsType: string;
  billingType: string;
  billingCycle: string;
  amount: number;
  totalAmount: number;
  percentBillable: number;
  billableROI: number;
  netSavings: number;
  billMonth: string;
  dateDiscovered: string;
  dateApproved: string;
  dateSentToCarrier: string;
  estimateRealizedDate: string;
  dateRealized: string;
  dateInvoiced: string;
  amxInvoiceNumber: string;
  description: string;
}
