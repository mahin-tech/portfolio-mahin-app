import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';

const Secret = ({ title }) => {
    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>I am Secret Page - {title}</h1>
            </BasePage>
        </BaseLayout>
    )

}

export default withAuth(Secret)();