const Course = require('../Models/course');

async function getCourses(req, res){
  const courses = await Course.find().populate('createdBy', 'name').lean();
  res.writeHead(200, {'Content-Type':'application/json'});
  res.end(JSON.stringify(courses));
}

async function createCourse(req, res){
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', async () => {
    const { title, description, content, createdBy, level } = JSON.parse(body);
    const course = await Course.create({ title, description, content, createdBy, level });
    res.writeHead(201, {'Content-Type':'application/json'});
    res.end(JSON.stringify(course));
  });
}

module.exports = { getCourses, createCourse };
