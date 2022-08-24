handlebars ./hb-templates/tasks.handlebars -f ./hb-compiled/tasks.js
handlebars ./hb-templates/quests.handlebars -f ./hb-compiled/quests.js
handlebars ./hb-templates/overlayLoading.handlebars -f ./hb-compiled/overlayLoading.js
handlebars ./hb-templates/loginModal.handlebars -f ./hb-compiled/loginModal.js
cd ./hb-compiled
cat *.js > all-hb.js