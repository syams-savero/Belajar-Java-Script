function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Rule 1: hapus property
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // Rule 2: assign langsung (selain tracks)
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    // Rule 3 & 4: khusus tracks
    if (!records[id].hasOwnProperty("tracks")) {
      // Rule 3: bikin array kalau belum ada
      records[id].tracks = [];
    }
    // Rule 4: push value ke array
    records[id].tracks.push(value);
  }

  return records;
}
