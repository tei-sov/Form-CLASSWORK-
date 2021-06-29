import React,{Component} from 'react';

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
          firstname:'',
          lastname:'',
          email:'',
          gender:'',
          phonenumber:'',
    
        }
    
      }
    
      handleChange = (Event) => {
        this.setState({
          [Event.target.name] :Event.target.value
        })
      }

      handleSubmit = (Event) => {
          console.log(this.state)
          Event.preventDefault();
          this.setState ({
              firstname:'',
              lastname:'',
              email:'',
              gender:'',
              phonenumber:'',
            
            })

            
      }  
        
      
      
    
    
      render() {
        return (
    
          
          <div>
            <h3>First name</h3>
            <input type='text' name='firstname'/>
            
            <h3>Last name</h3>
            <input type='text' name='lastname'/>
    
            <h3>Email</h3>
            <input type='text' name='email'/>
    
            <h3>Gender</h3>
            <select>
             <option value="male">Male</option>
            <option value="female">Female</option>
            </select>   
    
    
            <h3>Phone number</h3>
            <input type='number' name='phonenumber'/>

            <br />



            <label htmlFor='firstname' className='heading'>Enter your firstname</label>
            <input type='text' 
            value={this.state.firstname}
            onchange = {this.handleChange}
            Name='firstname'
     
            ></input>

            <br/>

            
     
            <label htmlFor='lastname' className='heading'>Enter your lastname</label>
            <input type='text'
            value={this.state.lastname}
            onchange = {this.handleChange}
            Name='lastname'
     
            ></input>

            <br/>

            

            <label htmlFor='email' className='heading'>Enter your email</label>
            <input type='text'
            value={this.state.email}
            onchange = {this.handleChange}
            Name='email'/>

            <br/>

            

             <label htmlFor='gender' className='heading'>Gender</label>
            <select name='gender' value={this.state.gender} onchange = {this.handleChange}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>

            </select>


            <br/>
    
            </div> 

            
    
          
        );
      
    }
}

export default Form;