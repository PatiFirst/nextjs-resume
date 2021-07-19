import { Button, Card} from "antd";
import Meta from "antd/lib/card/Meta";
import styles from "../styles/Layout.module.css"
import Link from "next/link"
import projects from "../pages/data/allProject.json"

export default function Cards() {

  return (
    <>
      {
        Object.entries(projects).map((project, index) => {
          return(
            <div key={index} className={styles.card}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt={project[1].title} src={project[1].image[0]} 
                />}
              >
                <Meta title={project[1].title} />

                <Button type="primary" size="large" className={styles.button}>
                  <Link href="/projects/[project]" as={"/projects/" + project[0]}>
                    <a>View More</a>
                  </Link>
                </Button>

              </Card> 
            </div>
          )

        })
      }

    
      {/* <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="ShirBand" src="./images/ShirBand.jpg" />}
      >
        <Meta title="ShirBand" />
        <Button type="primary" size="large" className={styles.button}>
          View More
        </Button>
      </Card> */}
    </>
  );
}

// export async function getStaticProps(){

//   const project = await fetch("../pages/data/allProject.js")

// }
