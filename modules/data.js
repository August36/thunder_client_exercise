const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmcmp2c2dicmdrdG9ycnhraXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNDgxOTUsImV4cCI6MjAxMTkyNDE5NX0.FZgFg8q1LZylUrKUOvO7aIbWt83tY4dKVuVyAKKgxVU";

export async function getArtwork() {
  let headersList = {
    Accept: "application/json",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey: apikey,
    prefer: "return = representation",
  };

  let response = await fetch(
    "https://efrjvsgbrgktorrxkiyp.supabase.co/rest/v1/cph_lighthouse",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  return data;
}

export async function postArtwork() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/json",
    apikey: apikey,
    prefer: "return=representation",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    event_name: "artwork7000",
    id: 751,
  });

  let response = await fetch(
    "https://efrjvsgbrgktorrxkiyp.supabase.co/rest/v1/cph_lighthouse",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}

export async function delArtwork() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/json",
    apikey: apikey,
    prefer: "return=representation",
  };

  let response = await fetch(
    "https://efrjvsgbrgktorrxkiyp.supabase.co/rest/v1/cph_lighthouse?id=eq.668",
    {
      method: "DELETE",
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}
export async function patchArtwork() {
  let headersList = {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/json",
    apikey: apikey,
    "Content-Type": "application/json",
    prefer: "return=representation",
  };

  let bodyContent = JSON.stringify({
    id: 666,
    created_at: "2024-04-02T09:03:49.108994+00:00",
    img_url: null,
    event_name: "NEWNEWARTPIECEEEEE",
    video_url: null,
    location: "Falster",
    event_description: null,
    event_type: null,
    artist_website: null,
    map_location: null,
    additional_information: null,
    artist_name: null,
    artist_SoMe: null,
    credits: null,
    artist_information: null,
    time: null,
    slug: null,
  });

  let response = await fetch(
    "https://efrjvsgbrgktorrxkiyp.supabase.co/rest/v1/cph_lighthouse?id=eq.666",
    {
      method: "PATCH",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
}
