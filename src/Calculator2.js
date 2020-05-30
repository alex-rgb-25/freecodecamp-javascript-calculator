import React from 'react';

class Calculator2 extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            num:0,       // the number displayed.
            overall:'',   // store everything entered
            result:0,
            first:true,
            lastOp:'',
            signs:[],   // store the operations
            data: [],   // store all values to be evaluated
            hasDot:false, // enable only one . in a number
            lastPressed:0,
            caseMet: false // for 5 * -3   =-15

        }
    }
handleClick = (co) =>{

    this.state.overall+=co;
    
    if(co==='+' || co==='-' || co==='*' || co==='/'){

        this.state.signs.push(co);
        this.setState({
            num: 0,
            hasDot:false
        })

        if(this.state.caseMet===true){
            this.state.data.push(-Math.abs(parseFloat(this.state.num))); 
            this.setState({
                caseMet:false
            })
        }else{
            this.state.data.push(parseFloat(this.state.num));
        }
       
    }
    else{

        if(co==='.'){
            if(this.state.hasDot===false){
                this.setState({
                    hasDot:true,
                    num:this.state.num.toString()+'.',
                })
                console.log("NUM WITH DOT ADDED: " +this.state.num)
            }
        }else{
            if(this.state.hasDot===false){
                this.setState({
                num: this.state.num*10+co,
                })
            }else{

                this.setState({
                    num: this.state.num+co
                })

                console.log("NUM WITH DOT ADDED parsed to float !!!!!!!!!: " +this.state.num)
            }

        }

    }

    if(co==='+'){
        if(this.state.lastPressed==='+'||  this.state.lastPressed==='-' ||  this.state.lastPressed==='*' || this.state.lastPressed==='/'){
                console.log("TWO PLUSSES IN A ROW !!")
                this.state.signs[this.state.signs.length-2]=co
                this.state.signs.pop();
                this.state.data.pop();
            }
        }
        if(co==='*'){
            if(this.state.lastPressed==='+' ||  this.state.lastPressed==='-' ||  this.state.lastPressed==='*' || this.state.lastPressed==='/'){
                console.log("TWO * IN A ROW !!")
                this.state.signs[this.state.signs.length-2]=co
                this.state.signs.pop();
                this.state.data.pop();
            }
        }

        if(co==='/'){
            if(this.state.lastPressed==='+' ||   this.state.lastPressed==='-' || this.state.lastPressed==='*' || this.state.lastPressed==='/'){
                console.log("TWO / IN A ROW !!")
                this.state.signs[this.state.signs.length-2]=co
                this.state.signs.pop();
                this.state.data.pop();
            }
        }

        if(co==='-'){
            if(this.state.lastPressed==='-'){
                this.state.signs[this.state.signs.length-2]=co
                this.state.signs.pop();
                this.state.data.pop();
            }
            else if(this.state.lastPressed==='+' ||  this.state.lastPressed==='*' ||  this.state.lastPressed==='/'){
                this.state.signs.pop();
                this.state.data.pop();
             this.setState({
                 caseMet:true,
             })
            }
        }



    this.state.lastPressed=co;
console.log(this.state.signs)
console.log(this.state.data)
}


handleClick2 = () =>{      // the clear handler
    this.setState({
        num:0,
        first:true,
        result:0,
        lastOp:'',
        data:[],
        signs:[],
        hasDot:false,
        caseMet:false,
    })
 }

 handleClick3 = () =>{
    if(this.state.caseMet===true){
        this.state.data.push(-Math.abs(parseFloat(this.state.num))); 
        this.setState({
            caseMet:false
        })
    }else{
        this.state.data.push(parseFloat(this.state.num));
    }
    console.log(this.state.signs)
    console.log(this.state.data)

    this.setState({
            first:true
        })
        var resulta=this.state.data[0];
        console.log('resultaaa: ' + resulta)
        for(let i=0; i<this.state.signs.length;i++){
            console.log('resultaaa: ' + resulta)
            if(this.state.signs[i]=='+'){
                resulta=resulta+this.state.data[i+1];
                console.log('resultaaa: in plusssssssssss' + resulta)
            }
            if(this.state.signs[i]=='-'){
                resulta=resulta-this.state.data[i+1];
            }
            if(this.state.signs[i]=='*'){
                resulta=resulta*this.state.data[i+1];
            }
            if(this.state.signs[i]=='/'){
                resulta=resulta/this.state.data[i+1];
            }
        }

        this.setState({
            num:resulta,
            first:true,
        result:0,
        lastOp:'',
        data:[],
        signs:[],
        hasDot:false,
        caseMet:false,
        })



 }
    render(){
        return(
            <div className="container" style={styles}>

                <div id="display" >
                    <h2>{this.state.num}</h2>
                </div>
                <div className="row" style={styles3}> 
                    <div id="clear" onClick={this.handleClick2} className="col-9" style={styles2} style={{backgroundColor:'pink'}}>AC</div>
                    <div id="divide" onClick={() =>this.handleClick('/')} className="col" style={styles2}>/</div>
                </div>

                <div className="row" style={styles3}>
                    <div id="seven" onClick={() =>this.handleClick(7)} className="col" style={styles2}>7</div>
                    <div id="eight" onClick={() =>this.handleClick(8)} className="col" style={styles2}>8</div>
                    <div id="nine" onClick={() =>this.handleClick(9)} className="col" style={styles2}>9</div>
                    <div id="multiply" onClick={() =>this.handleClick('*')} className="col" style={styles2}>*</div>
                </div>

                <div className="row" style={styles3} >
                    <div id="four" onClick={() =>this.handleClick(4)} className="col" style={styles2}>4</div>
                    <div id="five" onClick={() =>this.handleClick(5)} className="col" style={styles2}>5</div>
                    <div id="six" onClick={() =>this.handleClick(6)} className="col" style={styles2}>6</div>
                    <div id="subtract" onClick={() =>this.handleClick('-')} className="col" style={styles2}>-</div>
                </div>

                <div className="row" style={styles3}>
                    <div id="one" onClick={() =>this.handleClick(1)} className="col" style={styles2}>1</div>
                    <div id="two" onClick={() =>this.handleClick(2)} className="col" style={styles2}>2</div>
                    <div id="three" onClick={() =>this.handleClick(3)} className="col" style={styles2}>3</div>
                    <div id="add" onClick={() =>this.handleClick('+')} className="col"  style={styles2}>+</div>
                </div>

                <div className="row" style={styles3}>
                    <div id="zero" onClick={() =>this.handleClick(0)} className="col-6" style={styles2}>0</div>
                    <div id="decimal" onClick={() =>this.handleClick('.')} className="col" style={styles2}>.</div>
                    <div id="equals" onClick={() =>this.handleClick3('=')} className="col" style={styles2}>=</div>
                </div>


                </div>

                
        )
    }
}

const styles3= {
    border:'1px solid black',
    marginTop:'-2px',
}
const styles= {
    maxWidth:'400px',
    marginTop:'70px',
    border:'1px solid black',
    backgroundColor:'#000',
}

const styles2={
    border:'1px solid black',
    height:'70px',
    textAlign: 'center',
    backgroundColor:'#4d606e',
    color:'white',
    paddingTop:'20px',
    fontSize:'20px',
}

export default Calculator2;