// import { useSelector } from 'react-redux'
// import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from './ui/table'

const HospitalReview = () => {
    const navigate = useNavigate()
  return (
   <div>
               <Table>
                   <TableCaption>A list of hospital reviews</TableCaption>
                   <TableHeader>
                       <TableRow>
                           <TableHead>Date</TableHead>
                           <TableHead>User Name</TableHead>
                           <TableHead>Ratings</TableHead>
                           <TableHead>Comments</TableHead>
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
               <Button className='bg-[#69247C] hover:bg-[#b664cc] text-white mx-5' onClick={()=> navigate(`/hospital`)}>Back</Button>
           </div>
  )
}

export default HospitalReview