import React from 'react'
import Layout from '../../components/Layout'
import projects from '../data/allProject.json'
import styles from '../../styles/Project.module.css'
import { Image, Button, Space } from 'antd';
import Link from 'next/link'

const Project = (props) => {

    const images = props.project.image
    const buttons = props.project.button
    
    return(
        <Layout>
            <div className={styles.projectCon}>
                <h1>{props.project.title}</h1>
                <h3>{props.project.subtitle}</h3>
                <p>{props.project.description}</p>
                
                <div className={styles.projectImgCon}>
                    <Space size="large">
                        {
                            buttons.map((button, index) => {
                                return(
                                        <Button type="primary" size="large"  key={index}>
                                            <Link href={button.link}>
                                                <a >{button.title}</a>
                                            </Link>
                                        </Button>

                                )
                            })
                        }
                    </Space>
                        
                </div>

                <Image.PreviewGroup>
                    <Space size="small" wrap>
                        {
                            images.map((image, index) => {
                                return(
                                        <Image
                                            property
                                            key={index}
                                            style={{marginRight: 20}}
                                            width={200}
                                            src={image}
                                            />
                                    )
                                })
                        }
                    </Space>
                </Image.PreviewGroup>
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