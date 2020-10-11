import React, {Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText:"",
            image: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const rand = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randImg = this.state.allMemeImgs[rand].url
        this.setState({image: randImg})
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    <button>Generate</button>

                </form>
                <div className="meme">
                    <img src={this.state.image} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;