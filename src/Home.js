
import { useState, useEffect } from 'react';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
    //without json
    // const [name, setName] = useState('Shila');
    // const [age, setAge] = useState(25);

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);


    // const [value, setValue] = useState('sneha');
    // const HandleClick = () => {
    //     console.log('hello', 'ninja')
    //     setName('maya');
    //     setAge(30);
    // }

    // const HandleClickAgain = (name) => {
    //     console.log('hello ' + name)
    // }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log('use ran effect');
    //     console.log(blogs);
    // }, [value]);

   const  {data:blogs, isPending, error}= useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {/* <h2>Home page</h2>
            <p>{name} is {age}</p>
            <button onClick={HandleClick}>Click me</button>
            <button onClick={() => HandleClickAgain('mario')}>Click me Again</button>
           <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's logs" />
            <button onClick={() => setValue('Naik')}>Change value</button>
       <p>{value}</p> */}
       { error && <div>{error}</div>}
            { isPending && <div>is Loading ...</div>}
            {  blogs && <BlogList blogs={blogs} title="All blogs" />}

        </div>
    );
}

export default Home;