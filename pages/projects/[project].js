import React from 'react'
import Layout from '../../components/Layout'
import projects from '../data/allProject.json'
import styles from '../../styles/Project.module.css'
import { Image } from 'antd';

const Project = (props) => {


    const images = [props.project.image]
    

    return(
        <Layout>
            <div className={styles.projectCon}>
                <h1>{props.project.title}</h1>
                <h3>{props.project.subtitle}</h3>
                <p>{props.project.description}</p>

                
                     {/* images.map((image,index) => { */}
                    {/* //     return( */}
                            <Image.PreviewGroup>

                                {
                                    // images.forEach((image) => {
                                    //     for (let i = 0; i < image.length; i++) {
                                    //         return(
                                    //             <Image
                                    //                 width={200}
                                    //                 src={image[i]}
                                    //             />
                                    //         )
                                    //     } 
                                    // })
                                    images.map((image) => {
                                        return(
                                            <Image
                                                width={200}
                                                src={image}
                                            />
                                        )
                                    })
                                }
                            </Image.PreviewGroup>
                        {/* // ) */}
                    {/* // }) */}
                

                

            </div>
        </Layout>
    )
}



Project.getInitialProps = ({ query }) => {
    return{
        project: projects[query.project]
    }
}

export default Project