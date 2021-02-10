import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
    const { data, loading } = useGetUser();
    useEffect(() => {
        return () => {
            window.__isAboutLoaded = true;
        }
    })

    const createFadeInClass = () => {
        if (typeof window !== 'undefined') {
            return window.__isAboutLoaded ? '' : 'fadein';
        }

        return 'fadein';
    }
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage className="about-page" title="About Me - Mahin Prajapati">
                <Row className="mt-5">
                    <Col md="6">
                        <div className="left-side">
                            <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
                            <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
                            <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`${createFadeInClass()}`}>
                            <p>My name is Mahin Prajapati and I am a web developer. </p>
                            <p>
                                I have a Master's degree in IT Services and one year of experience working
                                on a wide range of technologies and projects development for web applications in React
                                and PHP.
                            </p>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default About;