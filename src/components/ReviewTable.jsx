import { useSelector } from 'react-redux'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from './ui/table'



const ReviewTable = () => {
    const { singleHospital } = useSelector((store)=> store.hospital)
    const { singleDoctor } = useSelector((store)=> store.doctor)
    return (
        <div>
            <Table>
                <TableCaption>A list of your reviews</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>{singleDoctor?.role || singleHospital?.role} Name</TableHead>
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