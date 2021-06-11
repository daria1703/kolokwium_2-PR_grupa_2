import React, {Componets} from 'react'

class DChome extends Componets{

state = {
value: ""

};
setNewValue = () => {

this.setState({value:""})
}

reader() {

return <div>
<p>{this.state.value}</p>
<a class="btn btn-primary btn-lg" href='#' role='button' onClick={this.setNewValue}>Kliknij</a>
</div>

}


}
export default DChome;