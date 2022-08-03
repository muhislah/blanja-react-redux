import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { rupiah } from '../../../helpers/rupiah'

const MyOrder = () => {
  const {checkout :  {checkout}} = useSelector(state => state)
  return (
    <div className={style.container}>
      <p className={style.head}>My order</p>
      <hr />
      <div className='w-100'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Total Pay</th>
              <th scope="col">Status</th>
              <th scope='col'>To</th>
            </tr>
          </thead>
          <tbody>
            { checkout?.length > 0 ? (
              checkout.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{index +1}</th>
                    <td>{data.name}</td>
                    <td>{rupiah(data.stock * data.price)}</td>
                    { data.status == 'pending' ? (
                      <td><div className='btn btn-sm btn-warning'>Pending</div></td>
                    ) : (<td><div className='btn btn-sm btn-success'>Success</div></td>)}
                    <td>{data.address_name} - {data.type}</td>
                  </tr>
                )
              })
            ) : <h3 className='mt-5'>No History Found</h3>}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrder