import { Router } from 'express'
import { getAllPartners , getFilteredPartners } from '../controllers/partners/index'
 
const router: Router = Router()

router.get('/all_partners', getAllPartners)
router.get('/filtered_partners', getFilteredPartners)




export default router