import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

interface invoice {
  amount: Number | string;
  number: Number;
  name: String;
  due: String;
}

export default function Invoice() {
  let params = useParams() as any;
  let invoice = getInvoice(parseInt(params.invoiceId as string, 10)) as invoice;
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
