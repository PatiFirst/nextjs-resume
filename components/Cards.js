import { Button, Card} from "antd";
import Meta from "antd/lib/card/Meta";
import styles from "../styles/Layout.module.css"
import Link from "next/link"
import projects from "../pages/data/allProject.json"
import Image from "next/image"

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
                cover={
                  <Image
                    style={{marginRight: 20}}
                    width={200}
                    height={200}
                    src={project[1].image[0]}
                    alt={project[1].title}
                  />
                }
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
    </>
  );
}

