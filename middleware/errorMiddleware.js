module.exports.errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode===200?500:res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err?.message,
        stack:process.env.NODE_ENV==="production"? null: err?.stack ,
    });

}

module.exports.notFound=(req,res,next)=>{
    const err=new Error("Page not found");
    res.status(404);
    next(err);
}

