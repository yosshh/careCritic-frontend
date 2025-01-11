// import { useSelector } from 'react-redux'
// import { Badge } from './ui/badge'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from './ui/table'


const ReviewTable = () => {
   

    
    
    
    return (
        <div>
            <Table>
                <TableCaption>A list of your reviews</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Hospital Name</TableHead>
                        <TableHead>Ratings</TableHead>
                        {/* <TableHead className="text-right">Status</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                {/* {
                        allAppliedJobs.length <= 0 ? <span>You have not applied for any job yet.</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.companyName}</TableCell>
                                <TableCell className="text-right"><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                            </TableRow>
                        ))
                    } */}
                </TableBody>
            </Table>
        </div>
    )
}

export default ReviewTable