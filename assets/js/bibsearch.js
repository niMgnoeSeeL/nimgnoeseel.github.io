import { highlightSearchTerm } from "./highlight-search-term.js";

const VENUE_GROUPS = [
  {
    label: "Conference",
    venues: [
      { label: "ICSE", match: ["ICSE"] },
      { label: "FSE", match: ["FSE", "ESEC/FSE"] },
      { label: "ASE", match: ["ASE"] },
      { label: "ICLR", match: ["ICLR"] },
      { label: "S&P", match: ["S&P"] },
      { label: "ICST", match: ["ICST"] },
      { label: "SSBSE", match: ["SSBSE"] },
      { label: "SCAM", match: ["SCAM"] },
    ],
  },
  {
    label: "Journal",
    venues: [
      { label: "JSS", match: ["JSS"] },
      { label: "SCP", match: ["SCP"] },
      { label: "Soft. Eng. Notes", match: ["Soft. Eng. Notes"] },
    ],
  },
  {
    label: "Workshop",
    venues: [
      { label: "ICSE-W", match: ["ICSE-W"] },
      { label: "FSE-W", match: ["FSE-W"] },
      { label: "Mutation", match: ["Mutation"] },
      { label: "KIISE", match: ["KIISE"] },
    ],
  },
  {
    label: "Other",
    venues: [{ label: "PhD Thesis", match: ["PhD Thesis"] }],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const activeVenues = new Set();

  const getVenueOf = (li) => {
    const el = li.querySelector(".abbr abbr");
    return el ? el.textContent.trim() : "";
  };

  const filterItems = (searchTerm) => {
    document.querySelectorAll(".bibliography, .unloaded").forEach((element) => element.classList.remove("unloaded"));

    if (CSS.highlights) {
      const nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
      if (nonMatchingElements != null) {
        nonMatchingElements.forEach((element) => element.classList.add("unloaded"));
      }
    } else {
      document.querySelectorAll(".bibliography > li").forEach((element) => {
        const text = element.innerText.toLowerCase();
        if (text.indexOf(searchTerm) == -1) {
          element.classList.add("unloaded");
        }
      });
    }

    if (activeVenues.size > 0) {
      document.querySelectorAll(".bibliography > li").forEach((li) => {
        if (!activeVenues.has(getVenueOf(li))) {
          li.classList.add("unloaded");
        }
      });
    }

    document.querySelectorAll("h2.bibliography").forEach(function (element) {
      let iterator = element.nextElementSibling;
      let hideFirstGroupingElement = true;
      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const ol = iterator;
          const unloadedSiblings = ol.querySelectorAll(":scope > li.unloaded");
          const totalSiblings = ol.querySelectorAll(":scope > li");

          if (unloadedSiblings.length === totalSiblings.length) {
            ol.previousElementSibling.classList.add("unloaded");
            ol.classList.add("unloaded");
          } else {
            hideFirstGroupingElement = false;
          }
        }
        iterator = iterator.nextElementSibling;
      }
      if (hideFirstGroupingElement) {
        element.classList.add("unloaded");
      }
    });
  };

  const buildVenueFilters = () => {
    const container = document.getElementById("venue-filters");
    if (!container) return;

    const presentVenues = new Set();
    document.querySelectorAll(".bibliography > li").forEach((li) => {
      const v = getVenueOf(li);
      if (v) presentVenues.add(v);
    });

    VENUE_GROUPS.forEach((group) => {
      const venues = group.venues.filter((v) => v.match.some((m) => presentVenues.has(m)));
      if (venues.length === 0) return;

      const row = document.createElement("div");
      row.className = "venue-filter-group";

      const label = document.createElement("span");
      label.className = "venue-filter-group-label";
      label.textContent = group.label;
      row.appendChild(label);

      venues.forEach((venue) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "venue-filter-btn";
        btn.textContent = venue.label;
        btn.addEventListener("click", () => {
          const isActive = btn.classList.toggle("active");
          venue.match.forEach((m) => {
            if (isActive) activeVenues.add(m);
            else activeVenues.delete(m);
          });
          filterItems(document.getElementById("bibsearch").value.toLowerCase());
        });
        row.appendChild(btn);
      });

      container.appendChild(row);
    });
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1));
    document.getElementById("bibsearch").value = hashValue;
    filterItems(hashValue);
  };

  buildVenueFilters();

  let timeoutId;
  document.getElementById("bibsearch").addEventListener("input", function () {
    clearTimeout(timeoutId);
    const searchTerm = this.value.toLowerCase();
    timeoutId = setTimeout(filterItems(searchTerm), 300);
  });

  window.addEventListener("hashchange", updateInputField);

  updateInputField();
});
