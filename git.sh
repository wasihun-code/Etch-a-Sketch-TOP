echo -n "Commit message: "
read commit

git add --all;
git commit -m "$commit";
git push;

