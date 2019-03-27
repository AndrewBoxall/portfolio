export default function scrollToBookmark(linkId, e){
  e.preventDefault();

  let bookmarkedElement = document.getElementById(linkId);
  bookmarkedElement.scrollIntoView();
}
