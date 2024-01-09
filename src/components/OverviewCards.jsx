import { Card, CardBody, Typography } from "@material-tailwind/react";
const OverviewCards = () => {
    return (
        <ul className='flex items-start space-x-5'>
            <Card className="mt-6 w-96 flex-auto">
                <CardBody>
                    <Typography>
                        Online Orders
                    </Typography>
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-2"
                    >
                        231
                    </Typography>
                </CardBody>
            </Card>
            <Card className="mt-6 w-96 flex-auto">
                <CardBody>
                    <Typography>
                        Amount recieved
                    </Typography>
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-2"
                    >
                        23,92,312.19
                    </Typography>
                </CardBody>
            </Card>
        </ul>
    );
}

export default OverviewCards