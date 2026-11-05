
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("grid");
  const chips = document.getElementById("chips");
  const count = document.getElementById("count");
  const search = document.querySelector('input[type="search"]');

  if (!grid || typeof COURSES === "undefined" ||
      typeof CATEGORIES === "undefined") {
    console.error("Course data or grid element not found.");
    return;
  }

  let activeCategory = "all";
  let searchText = "";

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[char];
    });
  }

  function renderCategories() {
    if (!chips) return;

    const categories = [
      { id: "all", name: "সব কোর্স", icon: "📚" },
      ...CATEGORIES
    ];

    chips.innerHTML = categories.map(category => `
      <button type="button"
        data-category="${escapeHTML(category.id)}"
        style="border:1px solid #dce3ef;border-radius:24px;
        padding:9px 16px;margin:4px;background:
        ${activeCategory === category.id ? "#102c5c" : "#fff"};
        color:${activeCategory === category.id ? "#fff" : "#102c5c"};
        cursor:pointer;font-size:14px;">
        ${escapeHTML(category.icon)} ${escapeHTML(category.name)}
      </button>
    `).join("");

    chips.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", function () {
        activeCategory = this.dataset.category;
        renderCategories();
        renderCourses();
      });
    });
  }

  function renderCourses() {
    const filtered = COURSES.filter(course => {
      const matchesCategory =
        activeCategory === "all" ||
        course.category === activeCategory;

      const text = [
        course.title,
        course.desc,
        course.details,
        course.level,
        course.instructor
      ].join(" ").toLowerCase();

      return matchesCategory && text.includes(searchText);
    });

    if (count) {
      count.textContent = `${filtered.length}টি কোর্স পাওয়া গেছে`;
    }

    const empty = document.getElementById("empty");

    if (empty) {
      empty.hidden = filtered.length > 0;
    }

    grid.innerHTML = filtered.map(course => {
      const link = course.affiliateLink || "";
      const validLink = /^https?:\/\//i.test(link) &&
        !link.includes("YOUR_AFFILIATE_LINK_HERE");

      const image = course.image
        ? `<img src="${escapeHTML(course.image)}"
             alt="${escapeHTML(course.title)}"
             style="width:100%;height:170px;object-fit:cover;
             border-radius:12px 12px 0 0;">`
        : "";

      return `
        <article style="background:#fff;border:1px solid #e1e7f0;
          border-radius:15px;overflow:hidden;margin:12px 0;
          box-shadow:0 3px 12px rgba(0,0,0,.05);">
          ${image}
          <div style="padding:18px;">
            <span style="color:#52698b;font-size:13px;">
              ${escapeHTML(course.level)}
            </span>
            <h3 style="color:#102c5c;font-size:20px;margin:10px 0;">
              ${escapeHTML(course.title)}
            </h3>
            <p style="color:#65738a;line-height:1.7;">
              ${escapeHTML(course.desc)}
            </p>
            <p style="font-size:14px;color:#52698b;">
              শিক্ষক: ${escapeHTML(course.instructor)}
              <br>মেয়াদ: ${escapeHTML(course.duration)}
            </p>
            <strong style="color:#102c5c;font-size:19px;">
              ${escapeHTML(course.price)}
            </strong>
            <div style="margin-top:15px;">
              ${validLink
                ? `<a href="${escapeHTML(link)}" target="_blank"
                    rel="noopener noreferrer"
                    style="display:inline-block;background:#f5b400;
                    color:#102c5c;padding:11px 20px;
                    border-radius:8px;text-decoration:none;">
                    কোর্সটি দেখুন
                  </a>`
                : `<span style="color:#a05a00;font-size:13px;">
                    অ্যাফিলিয়েট লিংক যোগ করা হয়নি
                  </span>`
              }
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  if (search) {
    search.addEventListener("input", function () {
      searchText = this.value.trim().toLowerCase();
      renderCourses();
    });
  }

  renderCategories();
  renderCourses();
});
  
