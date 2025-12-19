import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "./ui/card"

const ReelCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reel Title</CardTitle>
                <CardDescription>Reel Description</CardDescription>
                <CardAction>
                    View More
                </CardAction>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>
            </CardFooter>
        </Card>
    )
}

export default ReelCard