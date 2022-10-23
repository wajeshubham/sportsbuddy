import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEvents,
  deleteEvent,
  addToComment,
  deleteToComment,
  joinToEvent,
  updateToEvent,
} from "../Store/fearures/event-slice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Events = () => {

  let dispatch = useDispatch();

  const events = useSelector((state) =>  (state.event.events));
  console.log("events",events)

  useEffect(() => {
    dispatch(getEvents());
  },[dispatch]);


  const joinEvent = (eventId) => {
    dispatch(joinToEvent(eventId));
    dispatch(getEvents());

  };

  const updateEvent = (id) => {
    const name = prompt("enter value");
    dispatch(updateToEvent({ name, id }));
    dispatch(getEvents());

  };

  const Delete = (deleteID) => {
    dispatch(deleteEvent(deleteID));
    dispatch(getEvents());

  };

  const addComment = (value, id) => {
    dispatch(addToComment({ value, id}));
    dispatch(getEvents());
    toast.success("successfully");

  };

  const deleteComment = (value, commentPostedBy, eventId) => {
    dispatch(deleteToComment({ value, commentPostedBy, eventId }));
    dispatch(getEvents());
    toast.success("successfully");

  };
  let id = JSON.parse(localStorage.getItem("user"))?.details;

  let isEqual = (first, second) =>
    JSON.stringify(first) === JSON.stringify(second);
 
  return (
    <div>
      {events?.map((item, index) => {
        return (
          <div key={index}>
            <h3>
              Created by:
              <Link to="/profile" state={item.postedBy._id}>
                {item.postedBy.username}
              </Link>
            </h3>
            <h1 className="text-orange-600">
              {item.name} {item.city} {item.description}
            </h1>
            <button onClick={() => Delete(item._id)}>Delete</button>
            <button onClick={() => updateEvent(item._id)}>Update</button>
            {item.numberOfPlayer === 0 ? (
              <h2>event is full</h2>
            ) : item.joinEvent.some((e) =>
                isEqual(e, {
                  _id: id?._id,
                  username: id?.username,
                })
              ) ? (
              <h1 className="text-orange-600"> you joined event</h1>
            ) : (
              <button onClick={() => joinEvent(item._id)}>Join Event</button>
            )}

            <h2>{item.numberOfPlayer} Places left</h2>
            {item.joinEvent.map((event, index) => (
              <div key={index}>
                <h3>
                  {index + 1}
                  <Link to="/profile" state={event._id}>
                    {event.username}
                  </Link>
                </h3>
              </div>
            ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addComment(e.target[0].value, item._id);
              }}
            >
              <input type="textarea" name="comment" placeholder="add comment" />
              <button>add comment</button>
            </form>
            {item.comments.map((comment, index) => (
              <div key={index}>
                <h3>
                  <Link to="/profile" state={comment.postedBy._id}>
                    {comment.postedBy.username}
                  </Link>
                </h3>
                <h3>{comment.comment}</h3>
                <button
                  onClick={() =>
                    deleteComment(
                      comment.comment,
                      comment.postedBy._id,
                      item._id
                    )
                  }
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Events;
