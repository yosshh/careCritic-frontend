// import { useSelector } from 'react-redux'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from './ui/table'


const ReviewTable = () => {
//    const { reviews=[] } = useSelector((store)=> store.reviews)

    
    
    
    return (
        <div>
            <Table>
                <TableCaption>A list of your reviews</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Hospital/Doctor Name</TableHead>
                        <TableHead>Ratings</TableHead>
                        <TableHead>Comments</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {/* {
                        reviews.length <= 0 ? <span>You have not posted any reviews.</span> : reviews.map((reviews) => (
                            <TableRow key={reviews._id}>
                                <TableCell>{reviews?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{reviews.job?.title}</TableCell>
                                <TableCell>{reviews.job?.company?.companyName}</TableCell>
                            </TableRow>
                        ))
                    } */}
                </TableBody>
            </Table>
        </div>
    )
}

export default ReviewTable