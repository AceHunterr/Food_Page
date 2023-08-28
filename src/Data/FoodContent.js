const jobData = [
  {
    id: 1,
    food_title: "Dosa",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/AAD/////Dw3/7e3/8fH/1tb/Kir/+Pj/9PT/gID/q6v/JiX/0ND/2tr/6en/ubn/w8P/4+P/mZn/Pz//ZGP/c3P/x8f/iIj/srL/Skn/Li3/aWn/oqL/cXD/5OT/OTn/VFT/REP/Gxr/lpX/W1v/jY3/VlX/Tk7/tbX/np7/ISD/kJD/enqtfutkAAAEbklEQVR4nO2caXfaQAxFWwIEyEb2fSF7mvz/39eT1MHA2HqaIceSet792hmRmxL7IY/49YsQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQv4Hept9JaOpXGlfW6i/341aRe+3miO50oG60EY3ahV6wz4qFd7wHZWaRjeEpWbBDfdwrf3Yhoe41ji04Y6mWGjDD02xSWDDTVWxrcCGV7pq23EN73XVjsIanmjL9aMaPmrLPQQ1zPiRgho+6evtxTTMqDcLafiaU1ARTv0Z3uYU/AhoqIqkNQENj/Mq4nDqzVAXSWvuwxkqI2kNDKfeDHu5JR+DGaojac1GLMPn/JrvoQx3S4qGMjwtKQrCqS/DoqKzQIZnZVV34hhmRdIaOZx6MhyUlt2MYnhdWvYqiGFuJK0Rw6kjw7fyuicxDNeoK4VTP4bgwb2MEE79GL6sU1gIp24Mb+Sdp+fyvwcwBJH0BjwVbg+nbgzljTO04Na9IYikU9gKbw2nXgwv5I34Jz12bggi6dcJKPBIqi2cOjG8lPd9/fTb8pq2cOrDcCRvu/63aktc1BZOfRgeyNuqq8hEXtUSTn0YyrtudcueHRuCSDq/m4/ldc3h1IWhNpGhZOfWEJziXTiPANK5W0Pw5ls4UwLezq9eDeU9l/qljeHUgSG4CQwW14JOR1M4dWAo38gvltaCbtW1S0MQxs6WV4OOY0M4tTcEYwcrq8FBhjeHhmDs4Gl1vdz5b3gBc8MHeUeSU0A3Iw2n5obyhoZGqLzhzp0h+C9pOGkBZk12vRnOxPV/UkH0h5uEU2NDEEkbTzzlXXytDcHYQZNg5g3U2BBElJaxmJwQZG0IImly1VDtGiyvtjWUxw5emgXRDWMlnJoagr+o1uee4APlyI+h3ONtf3YNuhnL4dTSELy2cP4gp5thaQjSSbsgOsK4NEFraSivFc8BycdQly5RhoYgkoqDBuAo8Y0PQ3kS9lwSRFFhMZzaGYJP62AaHRzpd2FYEknVv5+FcGpmCN5nDQ2XZeT3+EI4NTME1wrxuOEn4DpVh1MzQzmStj6Vr5Ffqe6UWxmCe7Z87PcLkBfm4dTKUB47OMSCqJsx/3oXI0PwstJpyjnKboaRITj+czFM6CVtN/DZa2prWLA3feoyFNefmxpmTcJ+k9xAQDfjxtKwaOwgbS3K68eGhpmTsBXpN32AE5uGhoVjB4NVQzAINjEzLB07SIPOnbh+aGZYPHaQGIJktG1lmD0J+016rZFLHRkZFkzCVqw27OEnlJGN4V35/iSQgz/pBxPDoknYirT/hjsF3RsWTcJ+kxjibk/3hmsVWH04iLoZMwPDwknYivTkGuy6dm4Ixg4QaZ9YXj/u3LB4ErYifSwMDuR0bgjGDjCJITjnPwH//sPcr3ed+SQ9JSv/0oblw7clDMGHVgVpkwq88RVfhfqDbMmNBxXTwQo7cutV8VWohBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSCf8BeqmMPZEmlpjAAAAAElFTkSuQmCC",

    tags: ["spicy", "flavourful"],
    description:
      "South Indian meal made from rice and pulses and served with coconut chutney.",
    mode: "dine-in/delivery",
    portion: "full/half",
    type: "veg",
    price: "100",
    food_type: "Indian",
  },
  {
    id: 2,
    food_title: "Dosa",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/AAD/////Dw3/7e3/8fH/1tb/Kir/+Pj/9PT/gID/q6v/JiX/0ND/2tr/6en/ubn/w8P/4+P/mZn/Pz//ZGP/c3P/x8f/iIj/srL/Skn/Li3/aWn/oqL/cXD/5OT/OTn/VFT/REP/Gxr/lpX/W1v/jY3/VlX/Tk7/tbX/np7/ISD/kJD/enqtfutkAAAEbklEQVR4nO2caXfaQAxFWwIEyEb2fSF7mvz/39eT1MHA2HqaIceSet792hmRmxL7IY/49YsQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQv4Hept9JaOpXGlfW6i/341aRe+3miO50oG60EY3ahV6wz4qFd7wHZWaRjeEpWbBDfdwrf3Yhoe41ji04Y6mWGjDD02xSWDDTVWxrcCGV7pq23EN73XVjsIanmjL9aMaPmrLPQQ1zPiRgho+6evtxTTMqDcLafiaU1ARTv0Z3uYU/AhoqIqkNQENj/Mq4nDqzVAXSWvuwxkqI2kNDKfeDHu5JR+DGaojac1GLMPn/JrvoQx3S4qGMjwtKQrCqS/DoqKzQIZnZVV34hhmRdIaOZx6MhyUlt2MYnhdWvYqiGFuJK0Rw6kjw7fyuicxDNeoK4VTP4bgwb2MEE79GL6sU1gIp24Mb+Sdp+fyvwcwBJH0BjwVbg+nbgzljTO04Na9IYikU9gKbw2nXgwv5I34Jz12bggi6dcJKPBIqi2cOjG8lPd9/fTb8pq2cOrDcCRvu/63aktc1BZOfRgeyNuqq8hEXtUSTn0YyrtudcueHRuCSDq/m4/ldc3h1IWhNpGhZOfWEJziXTiPANK5W0Pw5ls4UwLezq9eDeU9l/qljeHUgSG4CQwW14JOR1M4dWAo38gvltaCbtW1S0MQxs6WV4OOY0M4tTcEYwcrq8FBhjeHhmDs4Gl1vdz5b3gBc8MHeUeSU0A3Iw2n5obyhoZGqLzhzp0h+C9pOGkBZk12vRnOxPV/UkH0h5uEU2NDEEkbTzzlXXytDcHYQZNg5g3U2BBElJaxmJwQZG0IImly1VDtGiyvtjWUxw5emgXRDWMlnJoagr+o1uee4APlyI+h3ONtf3YNuhnL4dTSELy2cP4gp5thaQjSSbsgOsK4NEFraSivFc8BycdQly5RhoYgkoqDBuAo8Y0PQ3kS9lwSRFFhMZzaGYJP62AaHRzpd2FYEknVv5+FcGpmCN5nDQ2XZeT3+EI4NTME1wrxuOEn4DpVh1MzQzmStj6Vr5Ffqe6UWxmCe7Z87PcLkBfm4dTKUB47OMSCqJsx/3oXI0PwstJpyjnKboaRITj+czFM6CVtN/DZa2prWLA3feoyFNefmxpmTcJ+k9xAQDfjxtKwaOwgbS3K68eGhpmTsBXpN32AE5uGhoVjB4NVQzAINjEzLB07SIPOnbh+aGZYPHaQGIJktG1lmD0J+016rZFLHRkZFkzCVqw27OEnlJGN4V35/iSQgz/pBxPDoknYirT/hjsF3RsWTcJ+kxjibk/3hmsVWH04iLoZMwPDwknYivTkGuy6dm4Ixg4QaZ9YXj/u3LB4ErYifSwMDuR0bgjGDjCJITjnPwH//sPcr3ed+SQ9JSv/0oblw7clDMGHVgVpkwq88RVfhfqDbMmNBxXTwQo7cutV8VWohBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSCf8BeqmMPZEmlpjAAAAAElFTkSuQmCC",

    tags: ["spicy", "flavourful"],
    description:
      "South Indian meal made from rice and pulses and served with coconut chutney.",
    mode: "dine-in/delivery",
    portion: "full/half",
    type: "veg",
    price: "100",
    food_type: "Indian",
  },
  {
    id: 3,
    food_title: "Dosa",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/AAD/////Dw3/7e3/8fH/1tb/Kir/+Pj/9PT/gID/q6v/JiX/0ND/2tr/6en/ubn/w8P/4+P/mZn/Pz//ZGP/c3P/x8f/iIj/srL/Skn/Li3/aWn/oqL/cXD/5OT/OTn/VFT/REP/Gxr/lpX/W1v/jY3/VlX/Tk7/tbX/np7/ISD/kJD/enqtfutkAAAEbklEQVR4nO2caXfaQAxFWwIEyEb2fSF7mvz/39eT1MHA2HqaIceSet792hmRmxL7IY/49YsQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQv4Hept9JaOpXGlfW6i/341aRe+3miO50oG60EY3ahV6wz4qFd7wHZWaRjeEpWbBDfdwrf3Yhoe41ji04Y6mWGjDD02xSWDDTVWxrcCGV7pq23EN73XVjsIanmjL9aMaPmrLPQQ1zPiRgho+6evtxTTMqDcLafiaU1ARTv0Z3uYU/AhoqIqkNQENj/Mq4nDqzVAXSWvuwxkqI2kNDKfeDHu5JR+DGaojac1GLMPn/JrvoQx3S4qGMjwtKQrCqS/DoqKzQIZnZVV34hhmRdIaOZx6MhyUlt2MYnhdWvYqiGFuJK0Rw6kjw7fyuicxDNeoK4VTP4bgwb2MEE79GL6sU1gIp24Mb+Sdp+fyvwcwBJH0BjwVbg+nbgzljTO04Na9IYikU9gKbw2nXgwv5I34Jz12bggi6dcJKPBIqi2cOjG8lPd9/fTb8pq2cOrDcCRvu/63aktc1BZOfRgeyNuqq8hEXtUSTn0YyrtudcueHRuCSDq/m4/ldc3h1IWhNpGhZOfWEJziXTiPANK5W0Pw5ls4UwLezq9eDeU9l/qljeHUgSG4CQwW14JOR1M4dWAo38gvltaCbtW1S0MQxs6WV4OOY0M4tTcEYwcrq8FBhjeHhmDs4Gl1vdz5b3gBc8MHeUeSU0A3Iw2n5obyhoZGqLzhzp0h+C9pOGkBZk12vRnOxPV/UkH0h5uEU2NDEEkbTzzlXXytDcHYQZNg5g3U2BBElJaxmJwQZG0IImly1VDtGiyvtjWUxw5emgXRDWMlnJoagr+o1uee4APlyI+h3ONtf3YNuhnL4dTSELy2cP4gp5thaQjSSbsgOsK4NEFraSivFc8BycdQly5RhoYgkoqDBuAo8Y0PQ3kS9lwSRFFhMZzaGYJP62AaHRzpd2FYEknVv5+FcGpmCN5nDQ2XZeT3+EI4NTME1wrxuOEn4DpVh1MzQzmStj6Vr5Ffqe6UWxmCe7Z87PcLkBfm4dTKUB47OMSCqJsx/3oXI0PwstJpyjnKboaRITj+czFM6CVtN/DZa2prWLA3feoyFNefmxpmTcJ+k9xAQDfjxtKwaOwgbS3K68eGhpmTsBXpN32AE5uGhoVjB4NVQzAINjEzLB07SIPOnbh+aGZYPHaQGIJktG1lmD0J+016rZFLHRkZFkzCVqw27OEnlJGN4V35/iSQgz/pBxPDoknYirT/hjsF3RsWTcJ+kxjibk/3hmsVWH04iLoZMwPDwknYivTkGuy6dm4Ixg4QaZ9YXj/u3LB4ErYifSwMDuR0bgjGDjCJITjnPwH//sPcr3ed+SQ9JSv/0oblw7clDMGHVgVpkwq88RVfhfqDbMmNBxXTwQo7cutV8VWohBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSCf8BeqmMPZEmlpjAAAAAElFTkSuQmCC",

    tags: ["spicy", "flavourful"],
    description:
      "South Indian meal made from rice and pulses and served with coconut chutney.",
    mode: "dine-in/delivery",
    portion: "full/half",
    type: "veg",
    price: "100",
    food_type: "Indian",
  },
  {
    id: 4,
    food_title: "Dosa",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX/AAD/////Dw3/7e3/8fH/1tb/Kir/+Pj/9PT/gID/q6v/JiX/0ND/2tr/6en/ubn/w8P/4+P/mZn/Pz//ZGP/c3P/x8f/iIj/srL/Skn/Li3/aWn/oqL/cXD/5OT/OTn/VFT/REP/Gxr/lpX/W1v/jY3/VlX/Tk7/tbX/np7/ISD/kJD/enqtfutkAAAEbklEQVR4nO2caXfaQAxFWwIEyEb2fSF7mvz/39eT1MHA2HqaIceSet792hmRmxL7IY/49YsQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQv4Hept9JaOpXGlfW6i/341aRe+3miO50oG60EY3ahV6wz4qFd7wHZWaRjeEpWbBDfdwrf3Yhoe41ji04Y6mWGjDD02xSWDDTVWxrcCGV7pq23EN73XVjsIanmjL9aMaPmrLPQQ1zPiRgho+6evtxTTMqDcLafiaU1ARTv0Z3uYU/AhoqIqkNQENj/Mq4nDqzVAXSWvuwxkqI2kNDKfeDHu5JR+DGaojac1GLMPn/JrvoQx3S4qGMjwtKQrCqS/DoqKzQIZnZVV34hhmRdIaOZx6MhyUlt2MYnhdWvYqiGFuJK0Rw6kjw7fyuicxDNeoK4VTP4bgwb2MEE79GL6sU1gIp24Mb+Sdp+fyvwcwBJH0BjwVbg+nbgzljTO04Na9IYikU9gKbw2nXgwv5I34Jz12bggi6dcJKPBIqi2cOjG8lPd9/fTb8pq2cOrDcCRvu/63aktc1BZOfRgeyNuqq8hEXtUSTn0YyrtudcueHRuCSDq/m4/ldc3h1IWhNpGhZOfWEJziXTiPANK5W0Pw5ls4UwLezq9eDeU9l/qljeHUgSG4CQwW14JOR1M4dWAo38gvltaCbtW1S0MQxs6WV4OOY0M4tTcEYwcrq8FBhjeHhmDs4Gl1vdz5b3gBc8MHeUeSU0A3Iw2n5obyhoZGqLzhzp0h+C9pOGkBZk12vRnOxPV/UkH0h5uEU2NDEEkbTzzlXXytDcHYQZNg5g3U2BBElJaxmJwQZG0IImly1VDtGiyvtjWUxw5emgXRDWMlnJoagr+o1uee4APlyI+h3ONtf3YNuhnL4dTSELy2cP4gp5thaQjSSbsgOsK4NEFraSivFc8BycdQly5RhoYgkoqDBuAo8Y0PQ3kS9lwSRFFhMZzaGYJP62AaHRzpd2FYEknVv5+FcGpmCN5nDQ2XZeT3+EI4NTME1wrxuOEn4DpVh1MzQzmStj6Vr5Ffqe6UWxmCe7Z87PcLkBfm4dTKUB47OMSCqJsx/3oXI0PwstJpyjnKboaRITj+czFM6CVtN/DZa2prWLA3feoyFNefmxpmTcJ+k9xAQDfjxtKwaOwgbS3K68eGhpmTsBXpN32AE5uGhoVjB4NVQzAINjEzLB07SIPOnbh+aGZYPHaQGIJktG1lmD0J+016rZFLHRkZFkzCVqw27OEnlJGN4V35/iSQgz/pBxPDoknYirT/hjsF3RsWTcJ+kxjibk/3hmsVWH04iLoZMwPDwknYivTkGuy6dm4Ixg4QaZ9YXj/u3LB4ErYifSwMDuR0bgjGDjCJITjnPwH//sPcr3ed+SQ9JSv/0oblw7clDMGHVgVpkwq88RVfhfqDbMmNBxXTwQo7cutV8VWohBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCSCf8BeqmMPZEmlpjAAAAAElFTkSuQmCC",

    tags: ["spicy", "flavourful"],
    description:
      "South Indian meal made from rice and pulses and served with coconut chutney.",
    mode: "dine-in/delivery",
    portion: "full/half",
    type: "veg",
    price: "100",
    food_type: "Indian",
  },
];
export default jobData;
