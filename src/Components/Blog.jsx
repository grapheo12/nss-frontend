import React, {Component} from 'react'
import axios from 'axios';

class Blog extends Component{
    constructor(props){
        super(props);

        let blog_list = [
            {
                heading: "Loading......",
                time: "",
                small: "Hang on",
                body: "Loading our recent activities"
            }
        ];

        this.state = {
            blogs: blog_list
        }
    }

    componentDidMount(){
        axios.get("https://nsskgpapi.herokuapp.com/blogs")
             .then((res) => {
                console.log(res);
                 this.setState({
                    blogs: res.data.blogs.reverse()
                })
             })
             .catch(err => {
                 console.log(err);
             })
    }


    render(){
        return (
            <div>
                {this.state.blogs.map((blog) => { return (
                <div>
                    <main className="main-content bg-gray">
                        <div className="row">
                            <div className="col-12 col-lg-6 offset-lg-3">
                                <article className="mt-90">
                                    <header className="text-center mb-40">
                                        <h3>
                                        {blog.heading}
                                        </h3>
                                        <time>{blog.time}</time>
                                    </header>
                                    <div className="card-block">
                                        <p className="text-justify" dangerouslySetInnerHTML={{__html: blog.body}}></p>
                                    </div>
                                </article>
                                <hr />
                            </div>
                        </div>
                    </main>
                </div>);
                })}
            </div>
        )
    }
}

export default Blog;
