Rsync makes life easy to deploy

```
rsync -vcr --delete-after -e "ssh -p $DEPLOYPORT" ./site/ $DEPLOYUSER@$DEPLOYDOMAIN:$PATHTOCONTENT
```