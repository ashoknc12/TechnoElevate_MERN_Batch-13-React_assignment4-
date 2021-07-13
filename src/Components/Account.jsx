import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import React, { Component } from 'react'
export default class Account extends Component {
    state={
        account:[],
        show:false,
          firstname:"",
        lastname:"",
        email:"",
        phone:"",
        address:"",
        father:"",
        city:"",
        states:"",
        zip:"",
        check:false,
    }
    componentDidMount(){
        const url=`https://ems-mern-application-default-rtdb.firebaseio.com/accounts.json`;
        axios.get(url).then(res=>{
            // console.log(res.data);
            const fetchdata=[];

            for (const key in res.data) {
                fetchdata.push({
                    id:key,
                    ...res.data[key]
                })
            }
            if(res.status===200){
                this.setState({
                    account:fetchdata
                })
            }console.log(this.state.account);
        }).catch(err=>{
            console.log(err);
        })
    }
    deletedata=(data)=>{
        console.log(data);
        const url=`https://ems-mern-application-default-rtdb.firebaseio.com/accounts/${data.id}.json`
        axios.delete(url).then((res)=>{
        const updateddatas = this.state.account.filter((acc) => {
          if (acc.id === data.id) {
            return false;
          } else {
            return true;
          }
        });
        console.log(updateddatas);
           this.setState({
               account:updateddatas
           }) 
        }).catch(err=>{console.log(err);})
    }
    handleclose=()=>{
        this.setState({
            show:false
        })
    }
    updatedacc=(datas)=>{
        console.log(datas);
        this.setState({
            ...datas,
            show:true
        })
    }
     handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }
    updatedata=()=>{
        console.log(this.state);
        const url=`https://ems-mern-application-default-rtdb.firebaseio.com/accounts/${this.state.id}.json`
        const {firstname,lastname,email,phone,address,father,city,states,zip}=this.state
        const account={firstname,lastname,email,phone,address,father,city,states,zip}
        console.log(account);
        axios.put(url,account).then(res=>{
            console.log(res);
            const updateddata=res.data
             const updatedRecords = this.state.account.map((account) => {
          if (account.id === this.state.id) {
            return {
              id: this.state.id,
              ...updateddata,
            };
          } else {
            return account;
          }
        });
        console.log(updatedRecords);
        this.setState({
          show: false,
          account: updatedRecords,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    
    }
    render() {
        return (
            <div className="shadow-lg p-3 rounded container  ">
            <table className="table table-striped table-dark ">
            <thead>
                <tr>
                <th scope="col" className="text-danger">ID</th>
                <th scope="col" className="text-danger">Name</th>
                <th scope="col" className="text-danger">Email</th>
                <th scope="col" className="text-danger">Mobile</th>
                <th scope="col" className="text-danger">Father Name</th>
                <th scope="col" className="text-danger">Delete</th>
                <th scope="col" className="text-danger">Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.account.map((data,index)=>{
                        return(
                            <>
                            <tr key={data.id}>
                                <td key={index} >{index+1}</td>
                                <td key={data.firstname}>{data.firstname} {data.lastname}</td>
                                <td key={data.email}>{data.email}</td>
                                <td key={data.phone}>{data.phone}</td>
                                <td key={data.father}>{data.father}</td>
                                <td><button className="btn btn-outline-danger" onClick={()=>{this.deletedata(data)}}>Delete</button></td>
                                <td><button className="btn btn-outline-info"onClick={()=>{this.updatedacc(data)}} >Update</button></td>
                            </tr>
                            </>
                        )
                    })
                }
            </tbody>
            </table>
                <div>
                <Modal show={this.state.show} onHide={this.handleclose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update The Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        
                   
                         <form className="container shadow p-5 rounded  " onSubmit={this.handleSubmit}>
                            <div className="form-row ">
                            <div className="form-group col-md-6">
                            <label htmlFor="user" className="text-danger font-weight-bolder">Firstname</label>
                            <input type="text" className="form-control" id="inputuser4" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="lastuser" className="text-danger font-weight-bolder">Lastname</label>
                            <input type="text" className="form-control" id="inputuser4" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                            </div>
                            
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4" className="text-danger font-weight-bolder">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="phn" className="text-danger font-weight-bolder">Phone no</label>
                            <input type="text" className="form-control" id="phn" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress"  className="text-danger font-weight-bolder">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={this.state.address} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2"  className="text-danger font-weight-bolder">Father Name</label>
                            <input type="text" className="form-control" id="inputAddress2"  name="father" value={this.state.father} onChange={this.handleChange}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCity" className="text-danger font-weight-bolder">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputState" className="text-danger font-weight-bolder">State</label>
                            <select id="inputState" className="form-control" name="states" value={this.state.states} onChange={this.handleChange}>
                                <option selected>Choose...</option>
                                <option value="Tamilnadu" >Tamilnadu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Andrapradesh">Andrapradesh</option>
                                <option value="Telangana">Telangana</option>
                            </select>
                            </div>
                            <div className="form-group col-md-2">
                            <label htmlFor="inputZip" className="text-danger font-weight-bolder">Zip</label>
                            <input type="text" className="form-control" id="inputZip" name="zip" value={this.state.zip} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" name="check" value={this.state.check} onChange={this.handleChange}/>
                            <label className="form-check-label text-danger font-weight-bolder" htmlFor="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                    </form>
                     </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleclose}>Close</Button>
                        <Button variant="primary" onClick={this.updatedata}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        )
    }
}