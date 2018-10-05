import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <section id="footer" style={{backgroundColor:"black",marginTop: "50%"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"  style={{marginTop:"90%"}}>
                        <p className="h6">Copy All right Reserved to Pratian Technology</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default Footer;