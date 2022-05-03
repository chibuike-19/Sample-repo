import React from 'react';
import { getMovies } from '../services/fakeMovieService';



class Movies extends React.Component {
    state = { 
        movies: getMovies(),
    }
     // Delete selected item from the database
    deleteMovie = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: movies})

    }
    zeroDisplay(){
        const count = this.state.movies.length
        if (count === 0){
            return <th>There's no data in the database</th>
        } else {
            return this.getHeaders()
        }
    }
    updateDisplay(){
        const count = this.state.movies.length
        if (count === 0){
            return
        }else {
            return <div>Showing {count} movies in the database</div>
        }
    }
    // return the data from getMovies() in form of table
    returnTableData(){
        return (this.state.movies.map((movie) => {
            const { title, genre, numberInStock, dailyRentalRate} = movie
            return (
                <tr className='text-center border-y-2 ' key={movie._id}>
                    <td className='text-left h-12 w-1/4'>{title}</td>
                    <td className='text-left h-12 w-1/4'>{genre.name}</td>
                    <td className='text-left h-12 w-1/4'>{numberInStock}</td>
                    <td className='text-left h-12 w-1/4'>{dailyRentalRate}</td>
                    <td className='text-left h-12 w-1/4 bg-red-400 rounded-xl px-8 cursor-pointer' onClick={() => this.deleteMovie(movie)}>
                        Delete
                    
                    </td>
                </tr>
            )
            
        }))
    }
    getHeaders(){
        return (<tr className='text-left'> 
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            </tr>
          
        )
    }
   
    render() { 
        return (
            <div className='mx-16 mt-10'>
                <div className='pb-6'>{this.updateDisplay()}</div>
                <table className='w-full border-collapse border-y-2 py-6'>
                    <tbody>
                        {this.zeroDisplay()}
                        {this.returnTableData()}
                    </tbody>
                </table>
            </div>
        ) ;
    }
}
 
export default Movies;