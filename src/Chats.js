import React from 'react'
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';


import Group from './Group.png';


     class Review extends React.Component {
        constructor(props) {
          super(props);
      
          this.state = {
            name: '',
            gender: '',
            description: '',
          };
        }
      
        componentWillMount() {
          const { steps } = this.props;
          const { name, gender, description } = steps;
      
          this.setState({ name, gender, description });
        }
      
        render() {
          const { name, gender, description } = this.state;
          return (
            <div className="all__bots" >
              
                 
                     <span className="sPPans">{name.value}</span>
                   
                    <span>{gender.value}</span>
               
              
                     <span>{description.value}    for you here is the custome offer</span>
                     <div className="alls__sPPans">

                     <div className="all__sPPans">
                         <span>Offer price:</span>
                         <span>  Time</span>

                     </div>
                     <div className="all__sPPans">
                         <span>Delivery Time :</span>
                         <span>  Time</span>

                     </div> 
                      <div className="all__sPPans">
                         <span> Additional revisions</span>
                         <span>  Time</span>

                     </div>
                     </div>
                     <input type="submit" className="all__sPPans__button" value="Review Offer"/>
                     <input type="submit"  className="all__sPPans__buttons" value="Decline"/>

          
            </div>
          );
        }
      }
      
      Review.propTypes = {
        steps: PropTypes.object,
      };
      
      Review.defaultProps = {
        steps: undefined,
      };

    function Chats() {

        const [opened, setOpened] =React.useState(false);
        const Taggole=()=>{
            setOpened(true)
        
        }
        return (
            <div>
                <button  onClick={Taggole}>hxyucbudxjcd</button>
              {opened ?(<p> <ChatBot  steps={[
    {
        id: '1',
        message: 'Choose you want Programming?',
        trigger: 'name'
    },
    {
        id: 'name',
        options: [
            { value: ' Website & Mobile', label: ' Website & Mobile', trigger: '3' },
            { value: 'Website Development', label: 'Website Development', trigger: '3' },
            { value: 'Mobile Apps', label: 'Mobile Apps', trigger: '3' },
            
        ],
    },

    {
        id: '3',
        message: '  Please select type application?',
        trigger: 'gender'
    },




    {
        id: 'gender',
        options: [
            { value: ' Homepages ', label: ' Homepages ', trigger: '5' },
            { value: 'Portfolio  ', label: 'Portfolio  ', trigger: '5' },
            { value: 'Magazine', label: 'Magazine', trigger: '5' },
            { value: 'Landing pages', label: 'Landing pages', trigger: '5' },
            { value: 'E-commerce', label: 'E-commerce', trigger: '5' },
            { value: 'Social media', label: 'Social media', trigger: '5' },
            { value: 'Blogs', label: 'Blogs', trigger: '5' },
            { value: 'Directory and contact pages', label: 'Directory and contact pages', trigger: '5' },

        ],
    },

    {
        id: '5',
        message: 'Tell us more description',
         trigger: 'description'
    },


    {
        id: 'description',
        user: true,
        trigger: '7'

    },
    {
        id: '7',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: '8'

    },
    {
        id:'8',
        user: true,
        trigger: 'review'

    },

 
      {
        id: 'review',
        component: <Review />,
        asMessage: true,
      },
    {
        id: '9',
        user: true
 
    }

    ]}
                botAvatar= {Group}
                // userAvatar= "svg2_uri"
                />
</p>)
:(
<p> </p>
)
              }
              

            </div>
        )
    }

export default Chats
 