import {useEffect, useState} from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


function preventDefault(e) {
  e.preventDefault();
}

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('/api/v1/orders')
    .then(r => r.json())
    .then(data => setOrders(data))
  }, [])

  return (
    <>
    {console.log(orders)}
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Order Number</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {orders ? orders.items_ordered.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.created_at}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell align="right">{`$${order.order_amount}`}</TableCell>
            </TableRow>
          )) : []} */}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}