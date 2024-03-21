module.exports = (theFunc) => (req,res,next)=>{
    Promise.resolve(theFunc(theFunc(req,res,next))).catch(next)

}