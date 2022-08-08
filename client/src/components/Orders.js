import React, {useContext, useEffect, useState} from "react";
import {OrderContext} from '../context/order'
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


export default function Orders() {
  const {orders} = useContext(OrderContext);
  const [orderTotal, setOrderTotal] = useState()

  useEffect(() => {
    fetch(`/api/v1/orders/${id}/order_total`)
    .then((r) => r.json())
    .then(total => setOrderTotal(total)); 
    }, [id]);

  return (
    <React.Fragment>
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
          {orders ? orders.data.map((order) => (       
            <TableRow key={order.id}>
              <TableCell>{order.order_date}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell align="right">{`$${orderTotal}`}</TableCell>
            </TableRow>
          )) : []}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}