import axios from 'axios'
import React, { Component } from 'react'

export default class Testride extends Component {
    state={
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
     handleChange =(event)=>{
        this.setState({
            [event.target.name ]: event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        const url=`https://ems-mern-application-default-rtdb.firebaseio.com/accounts.json`
        const acc={...this.state}
        axios.post(url,acc).then((res)=>{
            if(res.status===200){
            this.setState({
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
        })
        this.props.history.push("/Booking Details")
            }
        }).catch((err)=>{console.log(err);})
       
    }
    render() {
        return (
            <div className="mybg">
            <form className="container shadow p-5 rounded " onSubmit={this.handleSubmit}>
                <div className="form-row ">
                <div className="form-group col-md-10">
                <label htmlFor="user" className="text-light font-weight-bolder">Firstname</label>
                <input type="text" className="form-control" id="inputuser4" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-10">
                <label htmlFor="lastuser" className="text-light font-weight-bolder">Lastname</label>
                <input type="text" className="form-control" id="inputuser4" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                </div>
                
            </div>
            <div className="form-row">
                <div className="form-group col-md-10">
                <label htmlFor="inputEmail4" className="text-light font-weight-bolder">Email</label>
                <input type="email" className="form-control" id="inputEmail4" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group col-md-10">
                <label htmlFor="phn" className="text-light font-weight-bolder">Phone no</label>
                <input type="text" className="form-control" id="phn" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group col-md-10">
                <label htmlFor="inputAddress"  className="text-light font-weight-bolder">Address</label>
                <input type="text" className="form-control" id="inputAddress"  name="address" value={this.state.address} onChange={this.handleChange}/>
            </div>
            <div className="form-group col-md-10">
                <label htmlFor="inputAddress2"  className="text-light font-weight-bolder">Father Name</label>
                <input type="text" className="form-control" id="inputAddress2"  name="father" value={this.state.father} onChange={this.handleChange}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-10">
                <label htmlFor="inputCity" className="text-light font-weight-bolder">City</label>
                <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-10">
                <label htmlFor="inputState" className="text-light font-weight-bolder">State</label>
                <select id="inputState" className="form-control" name="states" value={this.state.states} onChange={this.handleChange}>
                    <option selected>Choose...</option>
                    <option value="Tamilnadu" >Tamilnadu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
                </div>
                <div className="form-group col-md-10">
                <label htmlFor="inputZip" className="text-light font-weight-bolder">Zip</label>
                <input type="text" className="form-control" id="inputZip" name="zip" value={this.state.zip} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" name="check" value={this.state.check} onChange={this.handleChange}/>
                <label className="form-check-label text-light font-weight-bolder" htmlFor="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" className="btn btn-outline-danger bg-danger text-light ">Book Your Vaccine</button>
            </form>
        </div>
        )
    }
}